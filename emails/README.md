# Email sequence — Herdade do Malhão Pardo

Six templates, PT and EN. Written in the estate's voice: unhurried, specific, no marketing
adjectives, no urgency theatre. Send in the language the guest wrote in — every capture stores
`lang`, so the choice is already made for you.

**Placeholders** `{{name}}` `{{dates}}` `{{stay}}` `{{guests}}` `{{ref}}` — and anything in
`[SQUARE BRACKETS]` is still pending the owner's decision and must not go out as-is.

| # | Template | Trigger | Timing |
|---|---|---|---|
| 1 | Enquiry received | booking request submitted | immediately, automated |
| 2 | The personal reply | a person reads the request | within 24h — the promise the site makes |
| 3 | Waitlist welcome | joins "the list" | immediately, automated |
| 4 | Dates are open | a release of dates | when there is genuinely something to say |
| 5 | Voucher delivered | Stripe payment completes | immediately, automated |
| 6 | After the stay | 3 days after checkout | once, never twice |

> **Consent note.** Templates 1, 2 and 5 are service messages tied to a request or a contract —
> they need no marketing consent. Templates 4 and 6 are marketing: send them only to people who
> joined the list or agreed to hear from you, and carry an unsubscribe link in both. That
> distinction is what keeps the list lawful under the RGPD and Lei 41/2004.

---

## 1 · Enquiry received — automated

**EN** · Subject: `We have your request — Malhão Pardo`

> {{name}},
>
> Your request reached us: {{stay}}, {{dates}}, {{guests}} guests.
>
> Nothing has been charged — this was a request, not a payment. A person here reads it, checks the
> dates against the house, and writes back within 24 hours with exact availability and a full
> price, VAT and any tourist tax included. Nothing gets added later.
>
> If anything has changed in the meantime, simply reply to this message.
>
> Herdade do Malhão Pardo · Alentejo

**PT** · Assunto: `Recebemos o seu pedido — Malhão Pardo`

> {{name}},
>
> O seu pedido chegou-nos: {{stay}}, {{dates}}, {{guests}} hóspedes.
>
> Nada foi cobrado — isto foi um pedido, não um pagamento. Uma pessoa daqui lê-o, confirma as datas
> com a casa e responde dentro de 24 horas com a disponibilidade exata e um preço completo, com IVA
> e eventual taxa turística incluídos. Não se acrescenta nada depois.
>
> Se entretanto alguma coisa mudar, basta responder a esta mensagem.
>
> Herdade do Malhão Pardo · Alentejo

---

## 2 · The personal reply — written by a person, within 24h

*This is the one that matters. It is a skeleton, not a script: change it every time.*

**EN** · Subject: `{{dates}} at Malhão Pardo`

> {{name}},
>
> [Yes / Not those exact dates, but —] {{stay}} is [available / free from X].
>
> For {{guests}} guests, {{dates}}: **€[TOTAL]**, breakfast included, VAT included.
> [Tourist tax: €X per person per night, paid on departure.]
>
> [One specific, true sentence about that time of year — the cork harvest in June, the pool in
> August, fires in December. Never generic.]
>
> To hold it we ask for [DEPOSIT POLICY — pendente]. Free cancellation until
> [CANCELLATION WINDOW — pendente]; after that, [TERMS].
>
> Booking with us directly rather than through a platform: €25 credit at our table, a longer
> cancellation window, late checkout held until 14:00, and first choice of Vitality Circuit hours.
>
> Shall I hold it?
>
> [NAME], Herdade do Malhão Pardo

**PT** · Assunto: `{{dates}} no Malhão Pardo`

> {{name}},
>
> [Sim / Nessas datas exatas não, mas —] a/o {{stay}} está [disponível / livre a partir de X].
>
> Para {{guests}} hóspedes, {{dates}}: **€[TOTAL]**, com pequeno-almoço e IVA incluídos.
> [Taxa turística: €X por pessoa e por noite, paga à saída.]
>
> [Uma frase concreta e verdadeira sobre aquela altura do ano — a tiragem da cortiça em junho, a
> piscina em agosto, as lareiras em dezembro. Nunca genérica.]
>
> Para segurar, pedimos [POLÍTICA DE SINAL — pendente]. Cancelamento livre até
> [JANELA DE CANCELAMENTO — pendente]; depois disso, [CONDIÇÕES].
>
> Reservar connosco diretamente, em vez de por uma plataforma: €25 de crédito à nossa mesa, mais
> tempo para cancelar, saída tardia garantida até às 14h00 e primeira escolha dos horários do
> Vitality Circuit.
>
> Quer que segure?
>
> [NOME], Herdade do Malhão Pardo

---

## 3 · Waitlist welcome — automated

**EN** · Subject: `You're on the list`

> Thank you — you're on the list.
>
> We open quietly: a handful of dates at a time, told here first. That means one or two notes a
> year, not a newsletter. When there is something real to say, we say it.
>
> Meanwhile, the estate is here: [link]
>
> Herdade do Malhão Pardo · Alentejo
> *Leave the list whenever you like — [unsubscribe]*

**PT** · Assunto: `Ficou na lista`

> Obrigado — ficou na lista.
>
> Abrimos com discrição: um punhado de datas de cada vez, contadas aqui primeiro. Isso quer dizer
> uma ou duas notas por ano, não uma newsletter. Quando houver algo verdadeiro para dizer, dizemos.
>
> Entretanto, a herdade está aqui: [link]
>
> Herdade do Malhão Pardo · Alentejo
> *Pode sair da lista quando quiser — [cancelar subscrição]*

---

## 4 · Dates are open — marketing, list only

**EN** · Subject: `[SEASON] dates are open`

> We've opened [N] dates for [PERIOD].
>
> [Two true sentences about what that period is actually like here.]
>
> [Quartos from €160 · Suites from €240 · Casa do Monte from €420] — breakfast, the pool and the
> silence included.
>
> Booked here rather than on a platform: €25 credit at the table, a longer cancellation window,
> late checkout until 14:00, first choice of Vitality Circuit hours.
>
> [Take a date →]
>
> *[unsubscribe]*

**PT** · Assunto: `Abriram datas para [ESTAÇÃO]`

> Abrimos [N] datas para [PERÍODO].
>
> [Duas frases verdadeiras sobre como é aqui nesse período.]
>
> [Quartos desde €160 · Suites desde €240 · Casa do Monte desde €420] — com pequeno-almoço, a
> piscina e o silêncio incluídos.
>
> Reservado aqui em vez de numa plataforma: €25 de crédito à mesa, mais tempo para cancelar, saída
> tardia até às 14h00 e primeira escolha dos horários do Vitality Circuit.
>
> [Escolher uma data →]
>
> *[cancelar subscrição]*

---

## 5 · Voucher delivered — automated, after payment

**EN** · Subject: `Your Malhão Pardo voucher`

> Here it is — a voucher for Herdade do Malhão Pardo, €[AMOUNT].
>
> Reference: **{{ref}}**
>
> It can be used for a stay, a place at the long table, or the Vitality Circuit — by prior
> reservation and subject to availability. Valid [VALIDADE — pendente] from today.
>
> Whoever receives it simply writes to us with this reference and we take it from there.
>
> Stripe has sent the receipt separately.

**PT** · Assunto: `O seu vale do Malhão Pardo`

> Aqui está — um vale para a Herdade do Malhão Pardo, €[VALOR].
>
> Referência: **{{ref}}**
>
> Pode ser usado numa estadia, num lugar à mesa comprida ou no Vitality Circuit — mediante reserva
> prévia e sujeito a disponibilidade. Válido [VALIDADE — pendente] a partir de hoje.
>
> Quem o receber basta escrever-nos com esta referência e tratamos do resto.
>
> O recibo foi enviado em separado pela Stripe.

---

## 6 · After the stay — marketing, once only

**EN** · Subject: `The third day`

> {{name}},
>
> Thank you for the days you spent here. The house is quieter without you in it.
>
> If anything was not right, tell us plainly — it is the only way we improve.
>
> And if it was: [a public word would mean a great deal / would you let us quote something you
> said?]. Only if you want to, and only in your own words.
>
> The gate is open whenever you come back.
>
> [NAME], Herdade do Malhão Pardo
> *[unsubscribe]*

**PT** · Assunto: `O terceiro dia`

> {{name}},
>
> Obrigado pelos dias que passou aqui. A casa está mais silenciosa sem si.
>
> Se alguma coisa não correu bem, diga-nos com franqueza — é a única forma de melhorarmos.
>
> E se correu: [uma palavra pública significaria muito / deixa-nos citar algo que disse?]. Só se
> quiser, e só com as suas palavras.
>
> O portão fica aberto para quando voltar.
>
> [NOME], Herdade do Malhão Pardo
> *[cancelar subscrição]*
