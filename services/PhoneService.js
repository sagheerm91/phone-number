import PhoneNumber from "../models/PhoneModel.js";

class PhoneService {
  
  async checkNumber({phone_number}) {
    try {
      const phone = await PhoneNumber.findOne({phone_number: phone_number});
      if(!phone){
        return { success: false, message: 'Phone number not found', phone: phone};
      }
      return { success: true, message: 'Phone number found', phone: phone};
    } catch (error) {
      return { error: error.message };
    }
  }

}

export default new PhoneService();
