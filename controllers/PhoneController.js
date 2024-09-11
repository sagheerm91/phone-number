import PhoneNumber from "../models/PhoneModel.js";
import phoneServices from "../services/PhoneService.js";


export const checkNumber = async (req, res) => {
  const {phone_number} = req.body;
  const result = await phoneServices.checkNumber({phone_number});
  if (result.error) {
    return res.status(500).json(result);
  } else if (!result.success) {
    return res.status(404).json(result);
  } else {
    return res.status(200).json({ data: result });
  }
};

