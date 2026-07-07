import { Permission, RoleName, rolePermissions } from '../domain/permission';

export class PolicyEngine {
  can(role: RoleName, permission: Permission): boolean {
    return rolePermissions[role].includes(permission);
  }
}
