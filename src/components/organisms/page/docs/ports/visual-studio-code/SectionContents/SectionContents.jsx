/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { WaveFooter } from "atoms/core/vectors/divider";
import Section, { Content } from "containers/core/Section";
import { BookOpen, Zap } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE } from "config/routes/mappings";
import {
  topicsGettingStarted,
  topicsReferences
} from "data/components/organisms/page/docs/ports/visual-studio-code/topics";
import { sectionIdFor } from "utils";
import { colors } from "styles/theme";

import { ContentsCard, CardGrid } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE, 1);

/**
 * The component that represents the contents section of the docs page for the "Nord Visual Studio Code" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.14.0
 */
const SectionContents = () => (
  <Section id={SECTION_ID} variant="tertiary">
    <Content centered>
      <CardGrid>
        <ContentsCard
          accentColor={colors.nord8}
          logoComponent={Zap}
          svgType="stroke"
          title="Getting Started"
          topics={topicsGettingStarted}
        >
          Learn how to install, activate, customize and develop the extension.
        </ContentsCard>
        <ContentsCard accentColor={colors.nord10} logoComponent={BookOpen} title="References" topics={topicsReferences}>
          Learn about supported languages, extensions and how to deal with occurring problems.
        </ContentsCard>
      </CardGrid>
    </Content>
    <WaveFooter />
  </Section>
);

export default SectionContents;
