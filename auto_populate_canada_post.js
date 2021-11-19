var rec = [
  "ON,M4S1T6,229 Hillsdale Ave. E,Toronto,,Nikola Urosevic 1",
  "ON,M4S1T6,230 Hillsdale Ave. E,Toronto,,Nikola Urosevic 2",
  "ON,M4S1T6,227 Hillsdale Ave. E,Toronto,,Nikola Urosevic 3",
  "ON,M4S1T6,227 Hillsdale Ave. E,Toronto,,",
  "ON,,227 Hillsdale Ave. E,Toronto,,Nikola Urosevic 4",
]

const addRecipient = async (info) => {
  try {
    const provinces = {
      'ontario': 'ON',
      'on': 'ON',
      'quebec': 'QC',
      'qc': 'QC'
    }

    if (!info) {
      return false
    }
    
    const [province, postal, address, city, addressTwo, name] = info.split(',')

    if (!province || !postal || !address || !city || !name) {
      return false
    }

    const addButton = document.getElementById('addRecipientButton')
    addButton.click()

    await new Promise(r => setTimeout(r, 1000));

    hideAddressComplete()

    const nameField = document.getElementById('editForm:addressClientName')
    const addressField = document.getElementById('editForm:addressClientAddr')
    const addressTwoField = document.getElementById('editForm:addressClientLine2')
    const cityField = document.getElementById('editForm:addressClientCity')
    const provField = document.getElementById('editForm:addressClientProv')
    const postalField = document.getElementById('editForm:addressClientPostal')

    // const fullAddress = `${postal} ${address} ${city}`

    nameField.value = name
    addressField.value = address
    addressTwoField.value = addressTwo
    cityField.value = city
    provField.value = provinces[province.toLowerCase()]
    postalField.value = postal

    await new Promise(r => setTimeout(r, 1000));

    const saveButton = document.getElementById('editForm:saveNewRecipientButton')
    saveButton.click()

    
    await new Promise(r => setTimeout(r, 1000));

  } catch (err) {
    console.log(err)
    return false
  }

  return true
}

const populate = async () => {
  const failed = []

  for (let i = 0; i < rec.length; i++) {
    const address = rec[i]

    await new Promise(r => setTimeout(r, 1000));

    const success = await addRecipient(address)

    if (!success) {
      failed.push(address)
    }
  }

  console.log('Failed to add the following addresses')
  console.log(failed)
}

populate()
