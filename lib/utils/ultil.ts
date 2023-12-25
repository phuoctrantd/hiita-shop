export function getImageUrl(path: string): string {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}${path}`;
  }