const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("id-ID", {
    dateStyle: "full",
  });
};

const formatDateWithTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "short",
  });
};

const formatPrice = (price) => {
  return `Rp. ${price.toLocaleString("id-ID")}`;
};

const censorName = (name) => {
  const nameParts = name.split(" ");

  const censorPart = (part) => {
    if (part.length <= 2) {
      return part;
    }

    const firstChar = part[0];
    const lastChar = part[part.length - 1];
    const middle = part.slice(1, -1).replace(/./g, "*");
    return firstChar + middle + lastChar;
  };

  const censoredParts = nameParts.map(censorPart);

  return censoredParts.join(" ");
};

export { formatDate, formatDateWithTime, formatPrice, censorName };
