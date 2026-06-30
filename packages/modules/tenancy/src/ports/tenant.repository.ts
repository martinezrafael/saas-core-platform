import { Tenant } from '../domain/tenant.aggregate';

export interface TenantRepository {
  save(tenant: Tenant): Promise<void>;
}
