/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero } from "organisms/page/ports/hyper";

/**
 * The component that represents the landing page of the "Nord Hyper" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Hyper = ({ location: { pathname } }) => (
  <BaseLayout pathName={pathname}>
    <SectionHero />
  </BaseLayout>
);

Hyper.propTypes = locationPropTypes;

export default Hyper;
