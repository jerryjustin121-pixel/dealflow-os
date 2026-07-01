import Image from "next/image";
import { contacts } from "@/lib/mock-data";

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Contacts</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Relationship tracker</h1>
          </div>
          <span className="rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#15803D]">Trusted network</span>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
            <div className="flex items-center gap-4">
              <Image
                src={contact.avatar}
                alt={contact.name}
                width={56}
                height={56}
                className="rounded-3xl object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-slate-950">{contact.name}</p>
                <p className="text-sm text-slate-500">{contact.title}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>{contact.company}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
