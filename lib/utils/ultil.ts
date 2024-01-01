export function getImageUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${path}`;
}

export function formatTime(hours: number, minutes: number): string {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function formatDate(date: Date): string {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;}

 export function addZero(value:number) {
    return value.toString().padStart(2, '0');
  }