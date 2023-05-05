<script lang='ts'>
  import { searchResult, audioUrl, search, searchQuery } from '$lib/search'
  import Play from '$lib/components/icons/Play.svelte'
  import { pushQuery } from '$lib/url/pushQuery'

  const onPlay = () => {
    if ($audioUrl) {
      const audio = new Audio($audioUrl)
      audio.play()
    }
  }

  const onSynonymClick = async (synonym: string) => {
    const hasResult = await search(synonym)
    searchQuery.set(synonym)

    if (hasResult) {
      pushQuery(synonym)
    }
  }
</script>

<div class='search-result'>
  <header class:has-phonetic={$searchResult.phonetic}>
    <h1 class='word'>{$searchResult.word}</h1>
    {#if $searchResult.phonetic}
      <h2 class='phonetic'>{$searchResult.phonetic}</h2>
    {/if}
    <div class='play'>
      <Play on:click={onPlay} />
    </div>
  </header>

  <section class='meanings'>
    {#each $searchResult.meanings as meaning}
      <article>
        <div class='part-of-speech'>
          <div>
            {meaning.partOfSpeech}
          </div>
          <div class='border'></div>
        </div>
        <h3>Meaning</h3>
        <ul>
          {#each meaning.definitions as definition}
            <li>
              <div class='definition'>{definition.definition}</div>
              {#if definition.example}
                <div class='example'>{definition.example}</div>
              {/if}
            </li>
          {/each}
        </ul>
        {#if meaning.synonyms.length }
          <div class='synonyms'>
            <h3>Synonyms</h3>
            <div class='list-of-synonyms'>
              {#each meaning.synonyms as synonym}
                <a
                  class='synonym'
                  href={`/?q=${synonym}`}
                  on:click|preventDefault={() => onSynonymClick(synonym)}
                >{synonym}</a>
              {/each}
            </div>
          </div>
        {/if}

      </article>
    {/each}
    {#if $searchResult.sourceUrls}
      {#each $searchResult.sourceUrls as sourceUrl}
        <div>{sourceUrl}</div>
      {/each}
    {/if}
  </section>
</div>
<style lang='scss'>
  .search-result {
    color: var(--color-text-primary);

    header {
      display: grid;
      grid-template-rows: repeat(1, 6rem);
      grid-template-areas:
      "word play";

      &.has-phonetic {
        grid-template-rows: repeat(2, 3rem);
        grid-template-areas:
        "word play"
        "phonetic play";
      }

      .word {
        font-size: 2rem;
        font-weight: 700;
        align-self: center;
        grid-area: word;
      }

      .phonetic {
        font-weight: 400;
        align-self: center;
        color: var(--color-purple);
        grid-area: phonetic;
      }

      .play {
        align-self: center;
        grid-area: play;
        justify-self: end;
      }
    }

    .meanings {
      article {
        margin-top: 2rem;

        .part-of-speech {
          font-size: 24px;
          font-weight: 700;
          font-style: italic;
          display: flex;
          gap: 1rem;
          align-items: center;

          .border {
            height: 2px;
            width: 100%;
            background-color: var(--color-light-gray);
          }
        }

        h3 {
          font-size: 20px;
          font-weight: 400;
          color: var(--color-gray);
        }

        ul {
          list-style: none;
          margin-top: 1rem;
          padding-left: 2.5rem;

          li {
            &::marker {
              content: "•  ";
              color: var(--color-purple);
            }

            margin-top: 1rem;


            .definition {
              font-weight: 400;
            }

            .example {
              font-weight: 400;
              margin-top: 1rem;
              color: var(--color-gray);

              &::before {
                content: "˝";
              }

              &::after {
                content: "˶";
              }
            }
          }
        }

        .synonyms {
          display: flex;
          align-items: center;
          gap: 1rem;

          .list-of-synonyms {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-self: end;

            .synonym {
              font-weight: 700;
              color: var(--color-purple);
              text-decoration: none;
              line-height: 0.7rem;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
</style>

