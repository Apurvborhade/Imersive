import { services } from "data/services";

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            res.status(200).json(services);
            break;

        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}