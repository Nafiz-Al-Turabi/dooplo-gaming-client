import { getAuthenticatedUser, logout } from "@/app/controllers/authController";

export async function GET(req) {
  return getAuthenticatedUser(req);
}

export async function POST(req) {
  return logout(req);
}
