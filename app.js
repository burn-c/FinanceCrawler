const axios = require('axios')
const cheerio = require('cheerio')

const LeanResponse = (html) => {
    let $ = cheerio.load(html)
    return $('.conteudo.clearfix').map((index, element) => ({
        title: $(element).find('table.w728 tbody tr .data.w2').text(),
    })).get()
}


const SearchNoticies = async (LeanResponse) => {
    try {
        const response = await axios({ url: 'https://www.fundamentus.com.br/detalhes.php?papel=DIRR3', method: 'get' })
        const objectReturn = await LeanResponse(response.data)
        return Promise.resolve(objectReturn)
    } catch (err) {
        return Promise.reject(err)
    }
}

SearchNoticies(LeanResponse)
    .then(resp => console.log('response', resp))
    .catch(err => console.log('error', err))