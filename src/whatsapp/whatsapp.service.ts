import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WhatsappService {
  private readonly token = process.env.WHATSAPP_TOKEN;
  private readonly phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  private readonly facebookBaseUrl = process.env.FACEBOOK_BASEURL;

  async sendMessage(payload: any) {
    const url = `${this.facebookBaseUrl}/${this.phoneNumberId}/messages`;

    const headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    const res = await axios.post(url, payload, { headers });
    return res.data;
  }
}
