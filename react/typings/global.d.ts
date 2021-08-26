export interface QrReaderProps {
  setUseQr: (qr: boolean) => void
  separator: string
  separatorApparition: number
}

export interface BarcodeReaderProps {
  setUseBarcode: (barcode: boolean) => void
}

export interface SkuDataType {
  Id: string
  NameComplete: string
  DetailUrl: string
}

export type UseEanType = 'qr' | 'barcode'

export interface UseEanProps {
  setUse: (code: boolean) => void
  ean: string
  type: UseEanType
}

export type ModalType = 'succes' | 'error'
