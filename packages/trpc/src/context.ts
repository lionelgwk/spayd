// This context type is used only to type your routers
// The actual createContext function lives in apps/backend

export interface Context {
  prisma: any;
  req?: any;
  res?: any;
}
