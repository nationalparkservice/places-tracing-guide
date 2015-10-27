# Places Tracing Guide

Currently in development.

### To-do:

#### Primary:

- [ ] Review `index.html` Liquid statement structure
  - [X] Remove unused `tags` field and dependent Liquid statements
- Content updates/additions based on changes to data schema
  - [X] Rename/add new presets
  - [X] Reword road language to be more park-specific
  - [X] Reorganize trails
  - [ ] Add note re: how trail "approved uses" translate to specific presets
  - [X] Remove "Optional fields" from Crosswalk
- [ ] Highlight `NPS Unit Code` (including being lowercase only)
- [ ] Highlight `nps:` tags (primary keys coming in from GIS seeds)
- [ ] Note using POIs for wayfinding/routing (do not add a point to a restricted parking lot, building, etc)
- [X] Remove links to OSM wikis
- [X] Remove underlying tags tabs (to be included in Technical User Documentation)
- [X] Change optional field presentation from tag to title as displayed in editor
- [X] Update optional fields per preset, in order as displayed in Editor
- Redo/add new gifs:
  - [ ] Locale (formerly "Park District")
  - [ ] Lodge (gif is currently showing a feature that should be "Lodging")
  - [ ] Lodging (use same area as currently for "Lodge")
  - [ ] Litter Receptacle (formerly "Waste Basket")
  - [ ] Potable Water (formerly "Drinking Water")
  - [ ] Populated Place
  - [ ] Unknown Road
  - [ ] Highway
  - [ ] Minor Road (formerly "Unclassified Road")
  - [ ] Access Road (formerly "Service Road")
  - [ ] Private Road
  - [ ] Bridge (using the "Structure" form)
  - [ ] Crosswalk
  - [ ] One Way (using the "One Way" form)
  - [ ] Lanes (using the "Lanes" form)
  - [ ] Speed limit (using the "Speed Limit" form)
  - [ ] Trail (formerly "Non-Motorized Trail")
  - [ ] Motorized Trail (formerly "Motorized Track")
  - [ ] Pedestrian Path (use Governors Island)
  - [ ] Parking Lot

#### Secondary:

- [X] Fix "About" section anchor
- [ ] Implement individual Editor `.json` files
- [ ] Fix [navbar button bug](https://github.com/nationalparkservice/places-tracing-guide/issues/13)
