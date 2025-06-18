import { useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  // type DocumentData,
} from "firebase/firestore";
import { db } from "../../firebase";
import type { IUseContactData } from "../interfaces/ContactForm/IUseContactInfo";

export function useContactData(): IUseContactData {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);

  async function getAllContacts(): Promise<any> {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const contactsQuery = query(
        collection(db, "contacts"),
        orderBy("dateCreated", "desc"),
      );
      const querySnapshot = await getDocs(contactsQuery);
      const contactsData: any[] = [];

      querySnapshot.forEach((doc: any) => {
        contactsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setContacts(contactsData);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    // submitContact,
    // getContact,
    // deleteContact,
    // updateContact,
    getAllContacts,
    contacts,
    isLoading,
    error,
    success,
  };
}
