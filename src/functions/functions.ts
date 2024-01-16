const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

export function decimalPlace(amount: number | string): string {
    return amount.toLocaleString(undefined, currencyOptions);
  }

export   function currencyConverter(currency: string): string {
    let symbol: string;
    switch (currency) {
      case "EUR":
        symbol = "€";
        break;
      case "GBP":
        symbol = "£";
        break;
      case "NGN":
        symbol = "₦";
        break;
      case "USD":
        symbol = "$";
        break;
      case "YEN":
        symbol = "¥";
        break;
      default:
        symbol = "$";
        break;
    }
    return symbol;
  }

  export function truncateString(text: string): string {
    if (text.length > 25) {
        return text.slice(0,1)+ text.slice(1,26).toLowerCase() + "..."
    }
    return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase()
  }