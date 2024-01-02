import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function dates(publishedAt) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedRelativeDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const dateTime = publishedAt.toISOString();

  return {
    publishedDateFormatted,
    publishedRelativeDateToNow,
    dateTime
  }
}