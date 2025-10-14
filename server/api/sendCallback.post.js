export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { form, communication, comment } = body
    
        const payload = {
            fields: {
                TITLE: `Обратная связь с сайта (${communication === 'tel' ? 'Звонок' : 'Сообщение'})`,
                NAME: form.name,
                PHONE: [{ VALUE: form.phone, VALUE_TYPE: 'WORK' }],
                EMAIL: [{ VALUE: form.email, VALUE_TYPE: 'WORK' }],
                COMPANY_TITLE: form.company,
                SOURCE_ID: 'WEB',
                COMMENTS: comment
            }
        }
    
        const response = await $fetch("https://nanosoft.bitrix24.ru/rest/15/ivfj4rae0zab3dxm/crm.lead.add.json", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
        })
    
        return { success: true, result: response }
    } catch (error) {
        console.error('Ошибка при создании лида:', error)
        return { success: false, error: error.message }
    }
})
  