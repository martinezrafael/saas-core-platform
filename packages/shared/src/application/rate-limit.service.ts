export interface RateLimitRepository {
  increment(key: string, ttlSeconds: number): Promise<number>;
}

export class RateLimitService {
  constructor(private readonly repo: RateLimitRepository) {}

  async assertAllowed(key: string, limit: number, ttlSeconds: number) {
    const count = await this.repo.increment(key, ttlSeconds);

    if (count > limit) {
      throw new Error('Rate limit exceeded');
    }
  }
}
