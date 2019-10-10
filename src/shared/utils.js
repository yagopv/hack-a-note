export function getFriendlyDate(value) {
  if (value) {
    const intervals = {
      y: 31536000,
      M: 2592000,
      w: 604800,
      d: 86400,
      h: 3600,
      m: 60,
      s: 1
    };

    const seconds = Math.floor((new Date() - new Date(value)) / 1000);

    let counter: number;
    for (const interval of Object.keys(intervals)) {
      counter = Math.floor(seconds / intervals[interval]);
      if (counter > 0) {
        return counter + interval;
      }
    }
    return '0s';
  }
  return value;
}

export function findTextInNote(text, { title, content }) {
  if (!text) {
    return true;
  }

  if (title && title.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
    return true;
  }

  if (content && content.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
    return true;
  }

  return false;
}
