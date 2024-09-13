export type PaymentData = {
  payment_id: string;
  payment_status:
    | 'waiting'
    | 'finished'
    | 'confirming'
    | 'confirmed'
    | 'sending'
    | 'partially_paid'
    | 'failed'
    | 'refunded'
    | 'expired';
  pay_address: string;
  price_amount: 3999.5;
  price_currency: string;
  pay_amount: number;
  pay_currency: string;
  order_id: string;
  order_description: string;
  ipn_callback_url: string;
  created_at: string;
  updated_at: string;
  purchase_id: string;
  amount_received: string | null;
  payin_extra_id: string | null;
  smart_contract: string;
  network: string;
  network_precision: number;
  time_limit: string | null;
  burning_percent: string | null;
  expiration_estimate_date: string;
};
