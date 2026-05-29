# Установка русской локализации

## Шаг 1 — Установка BepInEx

Скачайте **BepInEx-Unity.IL2CPP** (версия 6) и распакуйте содержимое архива в корневую папку игры.

> [Скачать BepInEx](https://builds.bepinex.dev/projects/bepinex_be)

---

## Шаг 2 — Установка XUnity.AutoTranslator

Скачайте **XUnity.AutoTranslator-BepInEx-IL2CPP** и распакуйте содержимое архива в корневую папку игры.

> [Скачать XUnity.AutoTranslator](https://github.com/bbepis/XUnity.AutoTranslator/releases)

---

## Шаг 3 — Установка шрифта

Скачайте **TMP_Font_AssetBundles** и скопируйте файл `arialuni_sdf_u2022` из архива в корневую папку игры.

> [Скачать TMP_Font_AssetBundles](https://github.com/bbepis/XUnity.AutoTranslator/releases/tag/v5.5.0)

---

## Шаг 4 — Первый запуск (инициализация BepInEx)

Запустите игру один раз, чтобы BepInEx сгенерировал файлы конфигурации. После завершения инициализации игру можно закрыть.

### Возможная проблема: зависание на сообщении `[Message:InteropManager] Downloading unity base libraries`

Если запуск завис на этом шаге:

1. Скачайте архив `2022.3.62.zip` со страницы [unity.bepinex.dev/libraries](https://unity.bepinex.dev/libraries/).
2. Распакуйте содержимое архива в папку `BepInEx/unity-libs/`.
3. Откройте файл `BepInEx\config\BepInEx.cfg` в любом текстовом редакторе.
4. Найдите строку `UnityBaseLibrariesSource = ...` и удалите всё, что стоит после знака `=`, оставив строку вида:
   ```
   UnityBaseLibrariesSource =
   ```
5. Сохраните файл и снова запустите игру — на этот раз инициализация должна пройти успешно.

---

## Шаг 5 — Настройка AutoTranslator

После первого запуска в папке `BepInEx\config\` появится файл `AutoTranslatorConfig.ini`. Откройте его в любом текстовом редакторе и задайте следующие значения:

```ini
Endpoint=Passthrough
Language=ru
FromLanguage=en
FallbackFontTextMeshPro=arialuni_sdf_u2022
```

Сохраните файл.

---

## Шаг 6 — Замена файлов локализации


### Вариант 1:

1. Запустите [UABEA](https://github.com/nesrak1/UABEA/releases).
2. Откройте файл `SCB_Data\resources.assets`.
3. Найдите и замените следующие ассеты, используя `Plugins → Import.txt`:
   - `localisation`
   - `localisedDialogue`
   - `localisedIntel`
   - `localisedSynopsis`
4. Сохраните файл.

### Вариант 2:

1. Скачать и распаковать архив в корень игры из [realeses](https://github.com/evilkuma/schrodingers-cat-burglar-localisation-ru/releases/tag/v1.0.0).

---

Готово! Запустите игру — интерфейс должен отображаться на русском языке.
