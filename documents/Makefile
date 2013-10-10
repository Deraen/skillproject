SOURCES=requirements.md
OUTPUT=$(addprefix pdf/,$(SOURCES:.md=.pdf))
EXTENSIONS="yaml_metadata_block+header_attributes"

compile: clean $(OUTPUT)

clean:
	-rm -f pdf/*.pdf

pdf/%.pdf: %.md template/main.tex
	pandoc -f markdown_mmd+$(EXTENSIONS) --variable lang=finnish --variable documentclass=report --toc --template=template/main.tex -o $@ $<

all: $(FILES:.md=.pdf)

.PHONY: all
