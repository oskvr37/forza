import json
import os

with open('cars.json', 'r') as f:
    cars = json.load(f)

downloaded = os.listdir('photos')

for car in cars:
    if f"{car['id']}_side.jpg" in downloaded:
        break

    print(f"Downloading {car['id']}")

    path = car['img'].split('/')[-1]

    photo_side = f'https://www.kudosprime.com/fh5/images/cars/side/{path}'
    photo_big = f'https://www.kudosprime.com/fh5/images/cars/big/{path}'

    os.system(f"curl {photo_side} -o photos/{car['id']}_side.jpg")
    os.system(f"curl {photo_big} -o photos/{car['id']}_big.jpg")
