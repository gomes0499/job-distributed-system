import { Producer } from 'pulsar-client';
import { PulsarClient } from '@jobber/pulsar';

export abstract class AbstractJob {
  private producer: Producer;

  constructor(private readonly pulsarClient: PulsarClient) {}

  async execute(data: object, job: string) {
    if (!this.producer) {
      this.producer = await this.pulsarClient.createProducer(job);
    }
  }
}
