import delay from '@/utils/delay'
const SECTION_MAIN = {
  topDescr: 'Пройдите точный и быстрый',
  title: 'тест на определение IQ',
  bottomDescr:
    '<span>и получите рекомендации по развитию своего интеллекта</span> и улучшению финансового благосостояния и личной жизни',
}

const SECTION_ARTICLE = {
  text: 'Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя.',
}

const SECTION_ADDITIONAL = {
  text: 'Также по результатам теста <strong>вы получите</strong> подробные <strong>советы</strong> по определению наиболее перспективной <strong>для вашего типа интеллекта сферы деятельности</strong>, которая принесет вам скорейший финансовый результат.',
}

const SECTION_SECONDARY_ADDITIONAL = {
  textTop:
    'Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь.</span>',
  textBottom:
    'Профессиональная интерпретация и детально <strong>проработанные рекомендации</strong> позволят вам качественно <strong>изменить все аспекты своей жизни:</strong> от финансового до любовного.',
}

const MAIN_PAGE_DATA = {
  sectionMain: SECTION_MAIN,
  sectionArticle: SECTION_ARTICLE,
  sectionAdditional: SECTION_ADDITIONAL,
  sectionSecondaryAdditional: SECTION_SECONDARY_ADDITIONAL,
}

async function server(resDelay = 0) {
  await delay(resDelay)
  return MAIN_PAGE_DATA
}

export default server
