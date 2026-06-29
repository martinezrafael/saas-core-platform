import { AggregateRoot } from '@saas/shared/domain/aggregate-root';

type TenantProps = {
  name: string;
  slug: string;
  status: 'active' | 'suspended';
  ownerId: string;
};

export class Tenant extends AggregateRoot<TenantProps> {
  static create(params: {
    id: string;
    name: string;
    slug: string;
    ownerId: string;
  }) {
    const tenant = new Tenant(params.id, {
      name: params.name,
      slug: params.slug,
      ownerId: params.ownerId,
      status: 'active',
    });

    tenant.addDomainEvent({
      eventId: crypto.randomUUID(),
      eventName: 'TenantCreated',
      occurredAt: new Date(),
      aggregateId: tenant.id,
      payload: {
        tenantId: tenant.id,
        ownerId: params.ownerId,
      },
    });

    return tenant;
  }
}
