// Starting data, used only until the first save is made from the admin account.
// (Bank details are intentionally blank: enter them in the app after you log in.)
export default {
  players: [
    { id: "jj2qrbu", name: "Amal" },
    { id: "4pldsk9", name: "Aby" },
    { id: "t378n51", name: "Mukil" },
    { id: "7w1a7th", name: "Justin" },
    { id: "jt8c0c8", name: "Pince" },
    { id: "4kfp64p", name: "Akhil Sebastian" },
    { id: "1zm754p", name: "Akhil" },
    { id: "s3fcmke", name: "Manu" },
    { id: "v4zbl7h", name: "Prashanth" },
    { id: "3gvdc07", name: "Sajesh" },
    { id: "dm3teq9", name: "Deepak" },
    { id: "x6al9r4", name: "Suvi" },
  ],
  sessions: [
    { id: "8blwz7x", date: "2026-11-17", venue: "Blackburn Leisure Centre", rate: 12, hours: 1, courts: 1,
      att: ["4pldsk9", "4kfp64p", "jj2qrbu", "t378n51"] },
    { id: "383zwkd", date: "2026-11-18", venue: "Blackburn Leisure Centre", rate: 12, hours: 1, courts: 1,
      att: ["4pldsk9", "1zm754p", "4kfp64p", "jj2qrbu", "dm3teq9", "7w1a7th", "s3fcmke"] },
  ],
  topups: [],
  settings: {
    venues: [
      { name: "Blackburn Leisure Centre", rate: 12 },
      { name: "Audley Sports", rate: 10 },
    ],
    advance: 10,
    low: 5,
    holder: "Amal",
    bank: { bankName: "", accNo: "", sort: "", benef: "", ref: "Badminton" },
  },
};
