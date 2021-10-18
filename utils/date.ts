import "moment/locale/sk";

import moment from "moment";

export const formatDate = (date, locale = "sk") =>
  moment(date).locale(locale).format("LL");
