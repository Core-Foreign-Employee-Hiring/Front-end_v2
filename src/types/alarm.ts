export interface ArchiveInquiryNotificationType {
  archiveInquiryNotificationId: number
  archiveInquiryId: number
  type: 'INQUIRY' | 'ANSWER'
  name: string
  title: string
  read: boolean
}
