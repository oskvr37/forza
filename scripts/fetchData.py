import requests
import json
from lxml.html import fromstring


print(f'🚀 Fetching cars!')

req = requests.get("https://www.kudosprime.com/fh5/carlist.php?range=2000")

assert req.status_code == 200

print(f'⌛ Website loaded')


html = fromstring(req.content)

car_divs = html.xpath("//div[@id='carlist']/div")

cars = []

for div in car_divs:
    id = int(div.xpath("@data-carid")[0])

    try:
        img = div.xpath("img/@src")[0]
        name = div.xpath("a[@class='name']/text()")[0]
        year = int(name.split(' ')[0])
        name = ' '.join(name.split(' ')[1:])

        category = div.xpath("div[@class='cty']/text()")[0].lower()
        sources = [s.lower() for s in div.xpath("div/div[@class='car_source']//b/text()")]

        price = div.xpath("div[contains(@class, 'price')]/b/text()")[0]
        price = int(price.strip().replace(',', ''))
        
        tunes_div = div.xpath("div/div[@class='car_tunes']/div")[0]

        score = int(tunes_div.xpath("span[contains(@class, 'pi')]/b/text()")[0])
        transmission = tunes_div.xpath("span[contains(@class, 'tr')]/text()")[0]

        power, weight = tunes_div.xpath("div[contains(@class, 'tpw')]/text()")
        weight = int(float(weight.strip().replace(',', '')) * 0.45359237)
        power = int(power.strip().replace(',', ''))

        try:
            speed, handling, acceleration, launch, braking, offroad = [float(s) for s in tunes_div.xpath("span[@class='stats']/b/text()")]
        except:
            speed, handling, acceleration, launch, braking, offroad = [None, None, None, None, None, None]

        try:
            top_speed, to60, to100, lateral_g = tunes_div.xpath("span[@class='car_perfs']//b/text()")
            top_speed = round(float(top_speed[:-4]) * 1.609344, 2)
            to60 = float(to60[:-1])
            to100 = float(to100[:-1])
            lateral_g = float(lateral_g[:-2])
        except:
            top_speed, to60, to100, lateral_g = [None, None, None, None]

        cars.append({
            "id": id,
            "img": img,
            "name": name,
            "year": year,
            "category": category,
            "price": price,
            "sources": sources,
            "score": score,
            "transmission": transmission,
            "power": power,
            "weight": weight,
            "stats": {
                "speed": speed,
                "handling": handling,
                "acceleration": acceleration,
                "launch": launch,
                "braking": braking,
                "offroad": offroad
            },
            "perfs": {
                "top_speed": top_speed,
                "to60": to60,
                "to100": to100,
                "lateral_g": lateral_g
        }})

    except Exception as e:
        print(f'❌ Error at id {id} {name}: {e}')

cars.sort(key=lambda x: x['id'])

print(f'✅ Fetched {len(cars)} cars!')

with open('cars.json', 'w') as f:
    json.dump(cars, f, indent=2)
