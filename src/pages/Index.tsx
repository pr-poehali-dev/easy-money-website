import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60);
  const [downloadProgress, setDownloadProgress] = useState(45);
  const [downloadTime, setDownloadTime] = useState(82);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setDownloadProgress((prev) => (prev < 100 ? prev + 0.5 : 100));
      setDownloadTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(progressTimer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}ч ${minutes}м`;
  };

  const formatDownloadTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} мин ${secs} сек`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950/20 to-background">
      <nav className="border-b border-border/50 backdrop-blur-xl bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Easy Money
              </h1>
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="transition-all duration-300"
              >
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button
                variant={activeTab === 'docs' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('docs')}
                className="transition-all duration-300"
              >
                <Icon name="FileText" className="mr-2" size={18} />
                Документы
              </Button>
              <Button
                variant={activeTab === 'requests' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('requests')}
                className="transition-all duration-300"
              >
                <Icon name="Briefcase" className="mr-2" size={18} />
                Заявки
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Работа с маркетплейсами
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Wildberries • Ozon • Яндекс Маркет
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-900/20 border-purple-500/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Icon name="Package" size={24} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Wildberries</h3>
                </div>
                <p className="text-muted-foreground">Модернизация аккаунтов и спонсорские программы</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Icon name="ShoppingCart" size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Ozon</h3>
                </div>
                <p className="text-muted-foreground">Оптимизация продаж и аналитика</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-600/20 to-orange-900/20 border-orange-500/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold">Яндекс Маркет</h3>
                </div>
                <p className="text-muted-foreground">Расширение присутствия и рост продаж</p>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold">Документы</h2>
            <div className="grid gap-4">
              {[1, 2, 3, 4].map((doc) => (
                <Card key={doc} className="p-6 hover:border-primary transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Документ {doc}</h3>
                        <p className="text-sm text-muted-foreground">Обновлен 2 дня назад</p>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Icon name="Download" className="mr-2" size={18} />
                      Скачать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Активные заявки</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30">
                <Icon name="Clock" size={20} className="text-destructive animate-pulse-glow" />
                <span className="font-semibold text-destructive">
                  Осталось: {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[1fr,400px] gap-6">
                <Card className="p-8 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-orange-600/10 border-primary/30">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex gap-3">
                        <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                          <span className="text-2xl">🛍️</span>
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <span className="text-2xl">📦</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold">Приветствие от Ozon и Wildberries!</h3>
                          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold border border-green-500/30">
                            Новая
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Уважаемый партнёр! Мы рады сообщить о специальном предложении для вашего региона.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-card/50 border border-border/50 space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Target" size={24} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-bold text-lg mb-2">Цель задания:</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            В вашем городе есть заявка на модернизацию аккаунта для продаж.
                            Также есть возможность стать спонсором клиента и получить дополнительные бонусы.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                        <Icon name="AlertCircle" size={24} className="text-destructive" />
                        <p className="font-semibold text-destructive">
                          Заявка будет активна только 48 часов!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <Button
                        size="lg"
                        className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                      >
                        <Icon name="CheckCircle2" className="mr-2" size={24} />
                        Заявка принята
                      </Button>
                    </div>

                    <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Icon name="User" size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">Контактное лицо:</h4>
                          <p className="text-xl font-semibold mt-1">Александр Попов</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Icon name="Phone" size={18} className="text-primary" />
                            <a
                              href="tel:+95312355234"
                              className="text-primary hover:underline font-mono text-lg"
                            >
                              +7 (953) 123-552-34
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Sparkles" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Цель спонсорства</h3>
                      </div>
                      
                      <div className="space-y-4 text-sm">
                        <div className="p-4 rounded-lg bg-card/50 border border-border/30">
                          <h4 className="font-semibold mb-2 text-foreground">Суть предложения:</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Настоящая заявка направлена на привлечение спонсорской поддержки для модернизации аккаунтов компании на ведущих маркетплейсах. Приоритетной задачей является повышение эффективности присутствия на онлайн-платформах.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                          <p className="text-muted-foreground leading-relaxed">
                            В случае наличия возможности спонсорства, клиент выражает заинтересованность в приобретении специализированного оборудования для производства 3D-моделей на заказ.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Детали:</h4>
                          
                          <div className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">Приоритет:</span>
                              <p className="text-muted-foreground">Модернизация аккаунтов на маркетплейсах</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">Дополнительная возможность:</span>
                              <p className="text-muted-foreground">Закупка оборудования для производства 3D-моделей на заказ (при наличии спонсорства)</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">Финансовые условия:</span>
                              <p className="text-muted-foreground">Сумма будет уточнена непосредственно у клиента</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">Логистика:</span>
                              <p className="text-muted-foreground">Подлежит уточнению с клиентом</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-6 right-6 w-80 animate-slide-in-up">
        <Card className="p-4 bg-card/95 backdrop-blur-xl border-primary/30 shadow-2xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name="Download" size={20} className="text-primary animate-pulse" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Скачивание документа...</p>
                  <p className="text-xs text-muted-foreground">contract_2024.pdf</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Icon name="X" size={16} />
              </Button>
            </div>
            <div className="space-y-2">
              <Progress value={downloadProgress} className="h-2" />
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{downloadProgress.toFixed(0)}%</span>
                <span className="text-muted-foreground">
                  Осталось: {formatDownloadTime(downloadTime)}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;