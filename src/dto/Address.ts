interface Address {
  id: number;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: number;
}

export default Address;
