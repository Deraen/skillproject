SOURCES=requirements.md
DBGOUTPUT=$(addprefix tmp/,$(SOURCES:.md=.tex))
OUTPUT=$(addprefix pdf/,$(SOURCES:.md=.pdf))
EXTENSIONS="yaml_metadata_block+header_attributes+multiline_tables+definition_lists+implicit_figures"

compile: clean $(OUTPUT)
debug: clean $(DBGOUTPUT)

clean:
	-rm -f pdf/*.pdf tmp/*.tex

pdf/%.pdf: %.md template/main.tex
	pandoc -f markdown_mmd+$(EXTENSIONS) --variable lang=finnish --variable documentclass=report --toc --template=template/main.tex -o $@ $<

tmp/%.tex: %.md template/main.tex
	pandoc -f markdown_mmd+$(EXTENSIONS) --variable lang=finnish --variable documentclass=report --toc --template=template/main.tex -o $@ $<

all: $(FILES:.md=.pdf)

.PHONY: all
