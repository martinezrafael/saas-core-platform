import { Tenant } from '../domain/tenant.aggregate.js';
import { TenantRepository } from '../ports/tenant.repository.js';

type Input = {
  ownerId: string;
  name: string;
};

export class CreateTenantUseCase {
  constructor(private readonly tenants: TenantRepository) {}

  async execute(input: Input) {
    const tenant = Tenant.create({
      id: crypto.randomUUID(),
      name: input.name,
      slug: input.name.toLowerCase().replace(/\s+/g, '-'),
      ownerId: input.ownerId,
    });

    await this.tenants.save(tenant);

    return {
      id: tenant.id,
    };
  }
}
