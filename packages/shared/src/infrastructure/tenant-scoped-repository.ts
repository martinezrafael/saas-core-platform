export abstract class TenantScopedRepository {
  protected assertTenantId(tenantId: string) {
    if (!tenantId) {
      throw new Error('tenantId is required');
    }
  }
}
