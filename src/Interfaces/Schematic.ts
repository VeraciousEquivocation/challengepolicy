type partnerObj = {
  id: string,
  name: string,
  logo: string,
}

export interface PolicySchematic {
  id: string,
  type: string
  title: string,
  description: string,
  status: string,
  premium: number,
  premium_formatted: string,
  payment_date: string,
  coverage_start_date: string,
  coverage_end_date: string | null,
  renewal: string | null,
  partner: partnerObj,
}