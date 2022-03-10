import { GuestInterface } from "~/interfaces";
import { getGuest } from "~/services";
import useSWR from "swr";

export const useGuest = (id: string): GuestInterface => {
  const guest: GuestInterface = {
    id: "",
    code: "",
    description: "",
    url_dog: "",
    name: "",
  };
  const { data } = useSWR(id.length > 15 ? id : "", getGuest);

  return data ?? guest;
};
