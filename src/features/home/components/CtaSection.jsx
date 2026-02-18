import { Button } from '@/shared/ui/Button';

export const CtaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Присоединяйтесь к тысячам пользователей
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 h-12 text-base font-semibold"
            >
              Создать аккаунт
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
