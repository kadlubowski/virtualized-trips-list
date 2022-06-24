import { setupWorker } from "msw";
import { rest } from "msw";
import { Trip } from "./contracts";
import {
  adjectives,
  countries,
  uniqueNamesGenerator,
} from "unique-names-generator";

const getTrips = (tripsNumber: number): Array<Trip> =>
  Array(tripsNumber)
    .fill(undefined)
    .map(() => {
      const randomNumber = Math.random();
      const tripTitle = uniqueNamesGenerator({
        dictionaries: [adjectives, countries],
        length: 2,
        separator: " ",
        style: "capital",
      });

      return {
        id: String(randomNumber),
        imageSrc: "https://picsum.photos/400/200?" + randomNumber,
        imageDescription: `${tripTitle} image`,
        destinationsNumber: Math.ceil(randomNumber * 20),
        daysNumber: Math.ceil(randomNumber * 40),
        tripTitle,
        rate: randomNumber * 5,
        price: (randomNumber * 5000).toFixed(2),
        specialPriceOffer: (randomNumber * 4500).toFixed(2),
        currency: "€",
      };
    });

const handlers = [
  rest.get("/trips", (req, res, ctx) => {
    const params = new URLSearchParams(req.url.search);
    const tripsNumber = Number(params.get("tripsNumber"));

    return res(
      ctx.status(200),
      ctx.json(getTrips(isNaN(tripsNumber) ? 0 : tripsNumber))
    );
  }),
];

export const worker = setupWorker(...handlers);
