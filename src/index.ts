interface User {
  birthYear: number
}

function calculateAgeOfUser(user: User) {
  return new Date().getFullYear() - use.birthYear
}

calculateAgeOfUser({
  birthYear: 19
})