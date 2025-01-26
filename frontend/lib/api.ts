const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export async function registerUser(username: string, email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })

  if (!response.ok) {
    throw new Error("Registration failed")
  }

  return response.json()
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json()
}

export async function getUserApiKeys() {
  const response = await fetch(`${API_BASE_URL}/user/api-keys`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch API keys")
  }

  return response.json()
}

export async function updateUserApiKeys(apiKeys: Record<string, string>) {
  const response = await fetch(`${API_BASE_URL}/user/api-keys`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ apiKeys }),
  })

  if (!response.ok) {
    throw new Error("Failed to update API keys")
  }

  return response.json()
}

