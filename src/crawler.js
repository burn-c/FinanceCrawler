import { Router } from 'express';
import { load } from 'cheerio';

const routes = new Router();

routes.get('https://www.fundamentus.com.br/detalhes.php?papel=DIRR3',
    function(err, body) {
        if(err) console.log('Erro: ' + err);

        var $ = load(body);

        $('.conteudo clearfix tr').each(function() {
            var title = $(this).find('.data w2 span').text().trim();

            console.log(title);
        })
    }
)