// utils/getExperience.ts
export function getExperience(startYear: number, startMonth: number): number {
  const startDate = new Date(Date.UTC(startYear, startMonth - 1, 1));
  const today = new Date();

  let years = today.getUTCFullYear() - startDate.getUTCFullYear();
  let months = today.getUTCMonth() - startDate.getUTCMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return +(years + months / 12).toFixed(1); // Retorna número decimal aproximado
}
