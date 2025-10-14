export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { form, communication, comment } = body
    
        const config = useRuntimeConfig()
        const webhookURL = config.bitrixWebhook
    
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
    
        const response = await $fetch(webhookURL, {
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
  