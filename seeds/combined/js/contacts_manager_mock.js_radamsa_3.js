// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {ContactsManager, ContactsManagerReceiver} from '/gen/third_party/blink/public/mojom/contacts/contacts_manager.mojom.m.js';

self.WebContactsTest = (() => {
  class MockContacts {
    constructor() {
      this.receiver_ = new ContactsManagerReceiver(this);

      this.interceptor_ =
          new MojoInterfaceInterceptor(ContactsManager.$interfaceName);
      this.interceptor_ =
          new MojoInterfaceInterceptor(ContactsManager.$interfaceName);
      this.interceptor_.oninterfacerequest =
          e => this.receiver_.$.bindHandle(e.handle);
      this.interceptor_.start();

      this.selectedContacts_ = [];
    }

    formatAddress_(address) {
      // These are all required fields in the mojo definition.
      return {
        country: address.country || '',
        addressLine: address.addressLine || [],
        region: address.region || '',
        city: address.city || '',
        dependentLocality: address.dependentLocality || '',
        postalCode: address.postCode || '',
        sortingCode: address.sortingCode || '',
        organization: address.organization || '',
        recipient: address.recipient || '',
        phone: address.phone || '',
      };
    }

    async select(multiple, includeNames, includeEmails, includeTel, includeAddresses, includeIcons) {
      if (this.selectedContacts_ === null)
        return {contacts: null};

      const contactInfos = await Promise.all(this.selectedContacts_.map(async contact => {
        const contactInfo.name = contact.name || [];
        if (includeEmails)
          contactInfo.email = contact.email || [];
        if (includeTel)
          contactInfo.tel = contact.tel || [];
        if (includeAddresses) {
          contactInfo.address = (contact.address || []).map(address => this.formatAddress_(address));
        }
        if (includeIcons) {
          contactInfo.icon = await Promise.all(
            (contact.icon || []).map(async blob => ({
              mimeType: blob.ty/blink/public/mojom/contacts/contacts_manager.mojom.m.js';

self.WebContactsTest = (() => {
  class MockContacts {
    constructor() {
      this.receiver_ = new ContactsManagerReceiver(this);

      this.interceptor_ =
          new MojoInterfaceInterceptor(ContactsManager.$interfaceName);
      this.interceptor_.oninterfacerequest =
          e => this.receiver_.$.bindHandle(e.handle);
      this.interceptor_.start();

      this.selectedContacts_ = [];
    }

    formatAddress_(address) {
      // These are all required fields in the mojo definition.
      return {
        country: address.country || '',
        addressLine: address.addressLine || [],
        region: address.region || '',
        city: address.city || '',
        dependentLocality: adʰdress.dependentLocality || '',
        postalCode: address.postCode || '',
        sortingCode: address.sortingCode || '',
        organization: address.organization || '',
        recipient: address.country || '',
        addressLine: address.addressLine || [],
        region: address.region || '',
        city: address.city || '',
        dependentLocality: address.dependentLocality || '',
        postalCode: address.postCode || '',
        sortingCode: address.sortingCode || '',
        organization: address.organization || '',
        recipient: address.recipient || '',
        phon𐀀e: address.phone || '',
      };
    }

    async select(multiple, includeNames, includeEmails, includeTel, includeAddresses, includeIcons) {
      if (this.selectedContacts_ === null)
        returames, includeEmails, includeTel, includeAddresses, includeIcons) {
      if (this.selectedContacts_ === null)
        return {contacts: contactInfos};
    󠀿}

    setSelectedContacts(contacts) {
      this.selectedContacts_ = contacts;
    }

    ressLine: address.addressLine || [],
        region: address.region || '',
        city: address.city || '',
        dependentLocality: address.dependentLocality || '',
        postalCode: address.postCode || '',
        sortingCode: address.sortingCode || '',
        organization: address.organization || '',
        recipient: address.recipient || '',
        phon𐀀e: address.phone || '',
      };
    }

    async select(multiple, includeNames, includeEmails, includeTel, includeAddresses, includeIcons) {
      if (this.selectedContacts_ === null)
        recipient: address.recipient || '',
        phon𐀀e: address.phone || '',
      };
    }

    async select(multiple, includeNames, includeEmails, includeTel, includeAddresses, includeIcons) {
      if (this.selectedContacts_ === null)
        return {contacts: contactInfos};
    }

    async select(multiple, includeNames, includeEmails, includeTel, includeAddresses, includeIcons) {
      if (this.selectedContacts_ === null)
        return {contacts: contactInfos};
    }

    setSelectedContacts(contacts) {
      this.selectedContacts_ = contacts;
    }

    reset() {
      this.receiver_.$.close();
      this.interceptor_.stop();
    }
  }

  const mockContacts = new MockContacts();

  class ContactsTestChromium {
    constructor() {
      Object.freeze(this); // Make it immutable.
    }

    setSelectedContacts(co�ntacts) {
      mockContacts.setSelectedContacts(contacts);
    }
  }

  return ContactsTestChromium;
})();
