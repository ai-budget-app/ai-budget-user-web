import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { MarqueeWrapper, MarqueeContent, MarqueeItem } from './styles'

const BASE_ITEMS = [
  'Учёт расходов',
  'Автоматическая категоризация транзакций',
  'Детальная статистика по периодам',
  'Контроль подписок',
  'Аналитика финансовых привычек',
  'Наглядные графики и отчёты',
  'Прогнозирование расходов',
  'Безопасность данных',
  'Банковский уровень защиты',
  'Шифрование на всех этапах',
]

const ITEM_HEIGHT = 60
const singleListHeight = BASE_ITEMS.length * ITEM_HEIGHT
const repeatedItems = [...BASE_ITEMS, ...BASE_ITEMS]

export const FeaturesSection = () => {
  return (
    <Section id="features">
      <SectionHeader
        title="Всё для контроля финансов"
        description="Инструменты, которые помогают принимать спокойные и взвешенные финансовые решения"
      />

      <MarqueeWrapper>
        <motion.div
          animate={{ y: [0, -singleListHeight] }}
          transition={{
            duration: BASE_ITEMS.length * 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <MarqueeContent>
            {repeatedItems.map((text, i) => (
              <MarqueeItem key={`${text}-${i}`}>{text}</MarqueeItem>
            ))}
          </MarqueeContent>
        </motion.div>
      </MarqueeWrapper>
    </Section>
  )
}