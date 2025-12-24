export type LanguageLevel =
  | "basic"
  | "conversational"
  | "fluent"
  | "native"

export type Language = {
  id: string
  name: string
  level: LanguageLevel
}
